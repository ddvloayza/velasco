import { google } from "googleapis";
import { NextResponse } from "next/server";

const SHEET_ID = "1ZDOlHia7FFHy3CO2DtLnoKsGajB6yJCes6qQpXOHo0M";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Hoja 1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [name, email, phone, message, new Date().toLocaleString()],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Google Sheets error:", error);
    return NextResponse.json(
      { error: "Error guardando en Google Sheets" },
      { status: 500 }
    );
  }
}
import { type NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/email-service"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }

    // Envoi de l'email avec Resend
    const result = await sendContactEmail({ name, email, message })

    if (!result.success) {
      console.error("Erreur lors de l'envoi de l'email:", result.error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du message" }, 
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
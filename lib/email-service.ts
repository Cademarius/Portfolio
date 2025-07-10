import { Resend } from 'resend'

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail({ name, email, message }: EmailData) {
  // Vérifier que la clé API est présente
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY non trouvée dans les variables d'environnement")
    return { success: false, error: "Configuration email manquante" }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  
  try {
    const data = await resend.emails.send({
      from: 'portfolio@resend.dev', // Utilisez ce domaine pour les tests
      to: 'procodeur4@gmail.com',
      replyTo: email, // L'email de l'expéditeur pour pouvoir répondre
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nouveau message depuis votre portfolio
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>Ce message a été envoyé depuis votre portfolio</p>
          </div>
        </div>
      `
    })
    
    console.log("Email envoyé avec succès:", data)
    return { success: true, data }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return { success: false, error }
  }
}
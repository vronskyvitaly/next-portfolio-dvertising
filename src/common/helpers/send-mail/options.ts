type InquiryType = 'question' | 'brief' | 'cooperation' | 'other'

const inquiryTypeLabels: Record<InquiryType, string> = {
  question: '❓ Задать вопрос',
  brief: '📋 Прислать бриф на разработку',
  cooperation: '🤝 Предложить сотрудничество',
  other: '✉️ Другое'
}

export const options = (
  email: string, 
  message: string, 
  name?: string, 
  inquiryType?: InquiryType
) => {
  const typeLabel = inquiryType ? inquiryTypeLabels[inquiryType] : 'Обращение'
  const subject = inquiryType === 'brief' 
    ? '📋 Новый запрос на бриф | Портфолио'
    : inquiryType === 'cooperation'
    ? '🤝 Предложение о сотрудничестве | Портфолио'
    : inquiryType === 'question'
    ? '❓ Новый вопрос | Портфолио'
    : '✉️ Новое сообщение | Портфолио'

  const currentDate = new Date().toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Новое сообщение</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">👋</div>
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Новое сообщение</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0 0; font-size: 14px;">Получено ${currentDate}</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              
              <!-- Inquiry Type Badge -->
              <div style="display: inline-block; background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%); border: 1px solid #c7d2fe; border-radius: 50px; padding: 10px 20px; margin-bottom: 30px;">
                <span style="color: #4f46e5; font-weight: 600; font-size: 14px;">${typeLabel}</span>
              </div>
              
              <!-- Sender Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding-bottom: 20px; border-bottom: 1px solid #e5e7eb;">
                    <h2 style="color: #111827; font-size: 14px; font-weight: 600; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 0.5px;">👤 Отправитель</h2>
                    
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 60px;">Имя:</span>
                          <span style="color: #111827; font-size: 16px; font-weight: 600;">${name && name.trim() ? name : '—'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 60px;">Email:</span>
                          <a href="mailto:${email}" style="color: #6366f1; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 60px;">Тип:</span>
                          <span style="color: #111827; font-size: 14px;">${typeLabel}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="color: #111827; font-size: 14px; font-weight: 600; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 0.5px;">💬 Сообщение</h2>
                    <div style="background-color: #f9fafb; border-left: 4px solid #6366f1; border-radius: 8px; padding: 20px;">
                      <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 10px 0;">Это сообщение отправлено через форму на сайте</p>
              <p style="color: #6b7280; font-size: 12px; margin: 0 0 10px 0;">Отправитель: ${name && name.trim() ? name : '—'} | ${email}</p>
              <a href="https://vronskyvitaly.ru" style="color: #6366f1; font-size: 13px; text-decoration: none; font-weight: 500;">vronskyvitaly.ru</a>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  return {
    from: 'vronskyvitaly@mail.ru',
    to: 'vronskyvitaly@mail.ru',
    subject: subject,
    html: html
  }
}

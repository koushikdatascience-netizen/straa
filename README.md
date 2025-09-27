# HarbourCare Chatbot

## Project Overview

This project implements a **fully functional, interactive chatbot** for **HarbourCare Allied Health**.  
The chatbot responds **strictly based on a predefined dataset**, including services, locations, hours, contact info, staff, and FAQs.  

> “I can only answer questions about HarbourCare Allied Health right now.”

The frontend is modern, responsive, and user-friendly, featuring **animated messages, quick FAQ buttons, and a dark-themed UI**.

---

## Features

- **Interactive chat interface** with a professional dark theme.  
- **User and bot message differentiation** with colors and gradients.  
- **Typing animation** for better UX.  
- **Quick FAQ buttons** for common questions.  
- **Local memory** for the last 10 messages.  
- **Error handling** for network issues, timeouts, or invalid responses.  
- **CORS-safe deployment** via Netlify proxy.  
- **Responsive design** for mobile and desktop.  

---

## Dataset

The chatbot is **grounded in the HarbourCare Allied Health dataset**:

| Field        | Information                                                                 |
|--------------|----------------------------------------------------------------------------|
| Name         | HarbourCare Allied Health                                                   |
| ABN          | 12 345 678 901                                                              |
| Services     | Support Work, Occupational Therapy, Physiotherapy                          |
| Locations    | Canberra & Gold Coast                                                       |
| Contact      | hello@harbourcare.example.com <br> +61 2 5550 9000                          |
| Hours        | Mon–Fri 08:30–17:30, Sat 09:00–13:00, Sun Closed                            |
| FAQs         | Accepts NDIS plans, offers home visits                                     |
| Staff Example| Kylie Nguyen (Client Services Lead), Dr. Aaron Patel (Senior Physiotherapist)|

> **Note**: Currently no vector database is used; it is a **rule-based dataset-driven bot**. Future scalability includes vector stores or embeddings for more complex queries.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)  
- **Backend / Automation**: [n8n](https://n8n.io) workflow  
- **Hosting**: [Netlify](https://www.netlify.com/)  
- **Proxy handling**: Netlify Functions for CORS-safe API requests  

---

## Hosting & Deployment

- **Netlify deployment**:
  - Drag and drop project folder into Netlify.  
  - Frontend assets served globally.  
  - Netlify functions handle proxy requests to n8n for CORS.  

- **Advantages**:
  - Free, fast hosting with automatic HTTPS.  
  - CORS issues handled via proxy.  

---

## Limitations

- Only answers questions from the predefined dataset.  
- No NLP or vector search implemented yet.  
- Only last 10 messages stored locally.  
- Requires Netlify proxy for CORS; cannot call n8n webhook directly from browser.  

---

## Contact

**Email**: hello@harbourcare.example.com  
**Phone**: +61 2 5550 9000  

---

For detailed setup instructions for developers, see **[SETUP.md](SETUP.md)**.


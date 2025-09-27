# HarbourCare Chatbot – Complete Documentation

---

## 1. Project Overview

This project implements a **fully functional, interactive chatbot** for **HarbourCare Allied Health**.  
The chatbot responds **strictly based on a predefined dataset**, including services, locations, hours, contact info, staff, and FAQs.  

> “I can only answer questions about HarbourCare Allied Health right now.”

The frontend is modern, responsive, and user-friendly, featuring **animated messages, quick FAQ buttons, and a dark-themed UI**.

---

## 2. Features

- **Interactive chat interface** with professional dark theme  
- **User and bot message differentiation** with colors and gradients  
- **Typing animation** for better UX  
- **Quick FAQ buttons** for common questions  
- **Local memory** for the last 10 messages  
- **Error handling** for network issues, timeouts, or invalid responses  
- **CORS-safe deployment** via Netlify proxy  
- **Responsive design** for mobile and desktop  

---

## 3. Dataset

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

## 4. Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)  
- **Backend / Automation**: [n8n](https://n8n.io) workflow  
- **Hosting**: [Netlify](https://www.netlify.com/)  
- **Proxy handling**: Netlify Functions for CORS-safe API requests  

---

## 5. n8n Workflow Setup

1. Go to [n8n](https://n8n.io) and create a **new workflow**.  
2. Add the following nodes:

### Webhook Node
- Method: `POST`  
- Path: `chat`  
- Activate workflow  
- Receives messages from the frontend

### Function / AI Node
- Can be a Function node for rule-based responses or an LLM node  
- Include the **system prompt**:


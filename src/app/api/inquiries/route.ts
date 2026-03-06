import { NextResponse } from "next/server";

export type InquiryRecord = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  projectLocation: string;
  serviceNeeded: string;
  scope: string;
  siteSize: string;
  turnaround: string;
  submittedAt: string;
};

const inquiryStore: InquiryRecord[] = [];
const notificationEmail = "tshilidzimudau62@yahoo.com";

export async function POST(request: Request) {
  const body = (await request.json()) as InquiryRecord;
  inquiryStore.push(body);

  return NextResponse.json({
    success: true,
    message: "Inquiry stored",
    notifyTo: notificationEmail,
    integrationReady: {
      crm: "Connect this endpoint to HubSpot/Salesforce",
      email: `Forward inquiry payload to ${notificationEmail}`,
    },
  });
}

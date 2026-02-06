from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

class ContactView(APIView):
    def post(self, request):
        data = request.data

        required_fields = ["fullName", "expertise", "subject", "message"]

        for field in required_fields:
            if field not in data or not str(data[field]).strip():
                return Response(
                    {"error": f"Missing or empty field: {field}"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        full_name = data["fullName"]
        expertise = data["expertise"]
        subject = data["subject"]
        message = data["message"]

        email_body = f"""
New Portfolio Inquiry

Name: {full_name}
Expertise Needed: {expertise}
Subject: {subject}

Message:
{message}
"""

        try:
            send_mail(
                subject=f"New Portfolio Inquiry: {subject}",
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
                fail_silently=False,
            )

            return Response(
    {
        "message": (
            "Your message has been successfully received. "
            "Thank you for reaching out. I will review your inquiry "
            "and respond to you at the earliest possible opportunity."
        )
    },
    status=status.HTTP_200_OK,
)


        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

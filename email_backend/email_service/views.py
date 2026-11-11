from django.conf import settings
from django.core.mail import EmailMessage

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactSerializer


@api_view(['POST'])
def contact_email(request):

    serializer = ContactSerializer(data=request.data)

    if not serializer.is_valid():

        return Response(
            {
                "success": False,
                "error": serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    data = serializer.validated_data

    first_name = data['firstName']
    last_name = data['lastName']
    company = data.get('company', '')
    email = data['email']
    source = data.get('source', '')
    message = data['message']

    subject = f"New Contact Enquiry from {first_name} {last_name}"

    email_body = f"""
New Contact Form Submission

First Name: {first_name}
Last Name: {last_name}
Company: {company}
Email: {email}
How did you hear about us?: {source}

Message:
{message}
"""

    try:

        email_message = EmailMessage(
            subject=subject,
            body=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.CONTACT_RECEIVER_EMAIL],
            reply_to=[email]
        )

        email_message.send(fail_silently=False)

        return Response(
            {
                "success": True,
                "message": "Email sent successfully"
            },
            status=status.HTTP_200_OK
        )

    except Exception:
        return Response(
            {
                "success": False,
                "error": "Unable to send email. Please try again later."
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
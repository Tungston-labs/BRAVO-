from rest_framework import serializers


class ContactSerializer(serializers.Serializer):

    firstName = serializers.CharField(
        max_length=100
    )

    lastName = serializers.CharField(
        max_length=100
    )

    company = serializers.CharField(
        max_length=200,
        required=False,
        allow_blank=True
    )

    email = serializers.EmailField()

    source = serializers.CharField(
        max_length=200,
        required=False,
        allow_blank=True
    )

    message = serializers.CharField()
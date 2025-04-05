export default {
  providers: [
    {
      domain: "https://mint-possum-68.clerk.accounts.dev/",
      applicationID: "convex",
      jwks_uri: "https://mint-possum-68.clerk.accounts.dev/.well-known/jwks.json",
      algorithm: "RS256",
      tokenExpiration: 3600,
      clockSkew: 5,
      claims: {
        "aud": "convex",
        "email": "{{user.primary_email_address}}",
        "email_verified": "{{user.email_verified}}",
        "family_name": "{{user.last_name}}",
        "given_name": "{{user.first_name}}",
        "name": "{{user.full_name}}",
        "nickname": "{{user.username}}",
        "phone_number": "{{user.primary_phone_number}}",
        "phone_number_verified": "{{user.phone_number_verified}}",
        "sub": "{{user.id}}",
        "picture": "{{user.image_url}}",
        "created_at": "{{user.created_at}}",
        "updated_at": "{{user.updated_at}}",
        "metadata": {
          "public": "{{user.public_metadata}}",
          "unsafe": "{{user.unsafe_metadata}}"
        },
        "session_actor": "{{session.actor}}"
      }
    },
  ],
};

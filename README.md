# Standardisation Test Exercise





## KryptoniteApp
### Background Story:

In the year 3030, technology has advanced immensely. Planet Earth has been destroyed, and the remaining human civilization has relocated to planet Krypton. To survive on Krypton, all humans have been transformed into Kryptonians.

Authentication and Authorization (Authn/Authz) have evolved beyond the use of usernames and passwords. Modern systems now utilise voice and other biometric details for authentication.

After Earth was destroyed along with all its data, some descendants of Genesys (known as Genies) continued Genesys legacy by renaming Genesys to CelestialCode. Kamsi, the great-grandson of Amara Onyeji, leads the Learnable team, assisted by Adaeze, Tappi’s distant cousin. Amara and Tappi led the Genesys Learnbale many years ago when Earth and its decorators were in harmony. However, it is in their blood and their blood has continued from where they stopped.

You have just been hired as a Software Developer at CelestialCode. Kamsi and Adaeze have collaborated with Oluoma, the great-granddaughter of Ezehlivinus, to develop the first Two-Factor Authentication (2FA) system for Krypton. This system will also store images and videos for training PlasmaAI, a future competitor to ChatGPT. Oluoma has extensive experience working with the House of El, where her father also worked. The House of El was renowned for its scientific and technological advancements and of course, Heroic legacy as notable from their children Kal-El and Kara Zor-El, otherwise known as Superman and Supergirl respectively before Earth's destruction.

The team (Oluoma, Kamsi, and Adaeze) decided to use the Elasticemail service. ElasticEmail is a product that the team built for sending emails. They used it to replace SendGrid's. SendGrid placed restrictions on Nigerian users before the destruction of their planet.

To keep things simple, the youngest in the family and the smartest so far in the El linage, Acamas-El had some discussion with Oluoma this morning. They want all input to be validated and KryptoniteApp should only accept image files.

### Scenario:

Upon registration, a Kryptonian receives a confirmation email and proceeds to log in. The login process involves 2FA, where a Kryptonian enters their email address, a six-digit One-Time Password (OTP) is generated and sent to the provided email address. The Kryptonian must provide the OTP to receive a token. This token is then used for subsequent requests. Adaeze suggested using in-memory cache, Redis, or a database to store the OTP, which expires after 5 minutes.

Oluoma noted that Elasticemail often sends emails to the spam/junk folder, and Kryptonians need to mark these emails as not spam to receive future emails in their inbox. Kamsi has set up a GitHub repository and ensured the README is up to date.

### Requirements:

1. File Uploads:
   - All Kryptonians using the Kryptonite App must have API keys.
   - Files can be uploaded using the API key without an auth token.
   - If not already done, Kryptonians must generate an API key to upload files.
   - Uploaded files must be associated with the Kryptonian who owns the API key.
   - Only image files are allowed currently and should be stored as Base64 strings in the database. This is to help images to be shared easily across various AI industries on Krypton, Acamas added.
   - Files should be deleted from the system/app folder after being stored.

2. API Design:
   - Follow RESTful API principles for designing resource endpoints.
   - Implement class-based services and controllers, as preferred by Oluoma’s grandfather.

3. Accessing Images:
   - Supergirl (Kara Zor-El) needs the ability to access all images or a single image without any form of authentication.

4. API Key Design:
   - Kryptonians should be able to invalidate an API key, making it unusable.
   - API keys should be issued once and never shown again to the Kryptonian.

### Task:

As a Software Developer at CelestialCode, you are tasked with implementing the following:

1. Kryptonian Registration and Authentication:
   - Implement Kryptonian registration with email confirmation.
   - Implement 2FA login using OTP sent via Elasticemail.
   - Store OTP using in-memory cache, Redis, or database.

2. File Upload Service:
   - Implement API key generation for Kryptonians.
   - Implement file upload functionality that associates uploaded files with the Kryptonian.
   - Ensure only image files are allowed and stored as Base64 strings.
   - Delete files from the system after storing them in the database.

3. Access Control:
   - Implement endpoints for uploading images, Acamas said it must be authenticated with an API key, and the API key should be sent on the headers Oluoma added.

4. Ensure Compliance: (To honour her great-grandfather Oluoma's preferred you)
   - Follow RESTful API principles.
   - Use class-based services and controllers for implementation.

Completing this task will demonstrate your ability to handle Kryptonian authentication, secure file uploads, and adhere to RESTful API design principles in a NodeJS backend environment.

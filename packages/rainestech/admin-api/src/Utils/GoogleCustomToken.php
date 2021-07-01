<?php

namespace Rainestech\AdminApi\Utils;

use Rainestech\AdminApi\Entity\Users;
use Firebase\JWT\JWT;

trait GoogleCustomToken
{
    public function getGoogleToken(Users $user) {
        $service_account_email = "firebase-adminsdk-ll3q5@tritek-bloom.iam.gserviceaccount.com";
        $private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/Q3KIRGMy2CvY\nmhIzNKhbCxVfOCdd1ud6Ukqi7XIz+PdRWRQuerUgW+BSyezDMQDS0JA4QCxUWQLi\nmo5QrLmQ+4G947vknKRzgCR1hMl1y9eVF8paPV1s2AukeMuf+3+9vGo5PJhS6bz0\nHOnP3izfW1FnC90Ifw2UIB5eFUH+PBpOoNFixJMh/ycSMQhA2mUN2zj40fXChLNW\nKqtYAVxizI9LHpV4PmN+S1O7udlg2cQPGFtE8ctpv3vN4HvtN0qHX3q+YagT34sR\n8q84+gNn0eSE6j3pGB+PxDt2GXGUJSI+ZIULZXqzsd9vBUyDtyxdVuKJrycMM14O\n5KQPSN6tAgMBAAECggEAV1upnNbLjkYRJMIebPfwq4DQ9qhRxrkpCgQ7JdaZMmbV\nI3kx0Bbo0spUF8w10WN48lEjhiW9eZscR777IJr7uN4/QKmbQMxRCpYtUOXhFGYR\n5f2zRWtA2D2Hd8xaiQxYqKM9yz3Dfx9WWBM6seBTE4OElzHid4Z8f7r509QWy9UB\nYmYB4TflQcZs1aQGV9eo8kDPtjOcdSVp16o/aEb3gCiEXGOilCaxSD9G+m6nMfWB\ntD7/SHc/JnbrEWxYCXXtBgKweAtEA0RISCtZeYXaiZh9Lg5C/DoAmBkpsmJiFt5d\nqbcvyjlrfqK9TV0s8vuTP+f5D25TtorhtPgykyZDSwKBgQD4IYflK6oj9TMuDIG1\nHeG96FUmOCuQtfkTeBF2j6zRWuPvJ9EoBTvZc85jJ2xfut2/Pdf6dUqBlhoIeeq8\n3eaLK7rSZ/vsaCp9oKRpbTHRf8eMoLy3dUwGxUWKUH4RZqc9uE3V69rBOTnRm1AO\n2OTNRcqjN1L0s8djEnEqSdJvhwKBgQDFVDvK1FbL6zmMS97VNrxRfNGr6T/M0f9d\n9FM5bASUwPegR6HzOdx3Cc2onCgjmlJZONkSDaynaaPa76Em1KoENXAzx9U93Kqk\n2k9Fo47KnL3VCV9Lf0mQk+qPO33XMHFUPvXi0GN+SII9hbCchg4lTM9CVTwTygeV\nO3TlHMmFKwKBgB0OABWrqT6Qpa+Ms1t75kUQgXf6N8+4HzRSaOkTJc9V7z6/0NP4\n2Os7jj06DoyfGvwbx8CCH3lRFDdN31jCOw6szjF5D5y9DcysFNRrftvjNICZCcAJ\nsh9Q1jW9+yUaehbWD/cuqOzbQJP0tcknSJNoyrOV9NbGfmBxdmLXRhbdAoGAZKvb\nsVfxTCmee3f9oDNDkiMm6RifhwQfzzQl/WahU6665peFBQyg8E4dEQdR5xAFMSWy\ngOZfDi3z/W9BfQkEEA+fRZuOq/fXSzFhPfr6j12172jPqDmxM0RzZ02HnvBE8SEJ\n2wRLrhKZ938sIj62Gst79bB8bPAmPDlQIs8z9G8CgYEAlzYsbp/twhCRaRHuL3Vw\nJ2lnpo73gQCv+cVr4xi0s8KGuXAg+Jgh4cqo5CCLdZlaYZ2X2v+7odDHHhpkUcg+\nyhvE4WAOBREaK0sUn0sZlUyPwFBVm6r4qQHON5QGreZzKnPvGVr+ken1goi5gGZ4\n0sa4xfQPYE14llK3j9S7hEc=\n-----END PRIVATE KEY-----\n";

        $now_seconds = time();
        $payload = array(
            "iss" => $service_account_email,
            "sub" => $service_account_email,
            "aud" => "https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit",
            "iat" => $now_seconds,
            "exp" => $now_seconds+(60*60),  // Maximum expiration time is one hour
            "uid" => $user->email,
            "claims" => array(
                "isAdmin" => $user->isAdmin,
                "isVendor" => $user->isVendor,
            )
        );
        return JWT::encode($payload, $private_key, "RS256");
    }
}
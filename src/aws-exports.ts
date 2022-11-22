const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_nWckKGp4O",
    "aws_user_pools_web_client_id": "21hnjrlt6btt35i07ccdsoqm9s",
    "authentication_flow_type": 'ALLOW_USER_PASSWORD_AUTH',
    "oauth": {
        "domain": "my-cdkappui.auth.ap-south-1.amazoncognito.com",
        "scope": ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        "redirectSignIn": "http://localhost:4200/login",
        "redirectSignOut": "http://localhost:4200/login",
        "responseType": "code"
    }
};


export default awsmobile;
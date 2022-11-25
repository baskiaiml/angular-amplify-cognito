import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

import { from, Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

/**
 * This will append jwt token for the http requests.
 *
 * @export
 * @class JwtInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return from(Auth.currentSession())
            .pipe(
                switchMap((auth: any) => { // switchMap() is used instead of map().

                    let jwt = auth.idToken.jwtToken;
                    let with_auth_request = request.clone({
                        setHeaders: {
                          /* 'Content-Type':'text/plain',
                           'Accept':'text/plain',
                           'Access-Control-Allow-Credentials': 'true',*/
                           'Access-Control-Allow-Methods':'GET,POST,DELETE,PUT,OPTIONS',
                           'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                           'Access-Control-Allow-Origin':'*',
                            Authorization: `${jwt}`
                        }
                    });
                    
                    console.log("headers",with_auth_request);
                    console.log("Id token",jwt);
                    return next.handle(with_auth_request);
                }),
                catchError((err) => {
                    console.log("Error ", err);
                    return next.handle(request);
                })
            );
        
    }

}
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  getName(): Promise<string> { return Promise.resolve("Test Service") }
  
  getSlowName(): Promise<string> {
    return new Promise<string>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => "Test Service Slow");
  }
}

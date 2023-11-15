import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidators {
  static invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'invalidName': true};
    }
    return null;
  }

  static asyncInvalidName(control: FormControl): Promise<any> | Observable<any> {
    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (control.value === 'TestA') {
    //       resolve({'invalidName': true});
    //     } else {
    //       resolve(null);
    //     }
    //   }, 1500);
    // })
    // return promise;

    return new Observable(observer => {
      setTimeout(() => {
        if (control.value === 'TestA') {
          observer.next({'invalidName': true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000 );
    })
  }
}

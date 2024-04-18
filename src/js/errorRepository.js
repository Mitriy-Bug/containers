export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [1,"Error 1"],
            [2,"Error 2"],
            [3,"Error 3"],
            [4,"Error 4"],
            [5,"Error 5"],
        ]);
    }
    translate(code){
       if ([...this.errors.keys()].includes(code)) {
          return this.errors.get(code)
       }
       return 'Unknown error';
    }
}
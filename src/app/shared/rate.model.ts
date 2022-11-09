
export class Rate{
    constructor(
        private no: string, 
        private _effectiveDate: Date, 
        private _mid: number){}

    get mid(){
        return this._mid;
    }
    get effectiveDate(){
        return this._effectiveDate;
    }
}
export class WhatsHappeningItem 
{
    public categoryAndTime: string;
    public text: string;
    public img: string;

    constructor(categoryandTime: string, text: string, image: string)
    {
        this.categoryAndTime = categoryandTime;
        this.text = text;
        this.img = image;
    }
}

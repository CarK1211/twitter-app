export class WhatsHappeningItem 
{
    public categoryAndTime: string;
    public text: string;
    public image: string;

    constructor(categoryandTime: string, text: string, image: string)
    {
        this.categoryAndTime = categoryandTime;
        this.text = text;
        this.image = image;
    }
}

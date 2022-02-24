export class MessageListItem
{
    public image: string;
    public username: string;
    public text: string;

    constructor(image: string, username: string, text: string)
    {
        this.image = image;
        this.username = username;
        this.text = text;
    }
}
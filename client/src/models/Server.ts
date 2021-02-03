export default class Server {
    constructor(
        public serverID : number,
        public serverName : string,
        public serverIP : string,
        public serverHostingCompany : string,
        public serverOnlineStatus : boolean,
        public serverCreationTime: Date
    ) {}
}
export class ConstPoll {
    constructor() { }
    Interval(v: number) {
        this.interval = v;
        return this;
    }

    Work(f: () => any) {
        this.work = f;
        return this;
    }

    Run() {
        console.log("run");
        if (this.disabled) {
            return;
        }
        this.work();
    }

    Start() {
        this.Stop();
        if (this.disabled) {
            return;
        }
        this.timer = setInterval(this.work, this.interval);
    }

    Stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    get Stopped() {
        return this.timer === null;
    }

    Disable() {
        this.disabled = true;
        this.Stop();
    }

    Enable() {
        this.disabled = false;
    }

    private disabled = false;

    private interval = 1000;
    private timer = null;
    private work = () => { };
}

export class BackoffPoller {
    
}

export class Timer {
    constructor() { }
    Interval(v: number) {
        this.interval = v;
        return this;
    }

    Work(f: () => any) {
        this.work = f;
        return this;
    }

    Start() {
        this.Stop();
        this.timer = setTimeout(this.work, this.interval);
    }

    Stop() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    private interval = 1000;
    private timer = null;
    private work = () => { };
}
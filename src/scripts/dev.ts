import app from './app'

const start = () => {
    let execSync = require('child_process').execSync;
    let url = `http://localhost:3000`;// /api.html
    let open = false;
    console.log('----------------------------------------');
    app.listen(3000, () => {
        console.log(`koa-demo is running as ${url}`);
        if (!open) return;
        try {
            execSync(`osascript openChrome.applescript ${url}`, {cwd: __dirname, stdio: 'ignore'})
        } catch (e) {
            execSync(`open ${url}`)
        }
    })
};

start();

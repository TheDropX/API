var childProcess = require('child_process');
var githubUsername = 'TheDropX'


export class WebhooksRoutes { 
    
    public routes(app): void {   
        
        app.post("/webhooks/github", function (req, res) {
            var sender = req.body.sender;
            var branch = req.body.ref;
        
            if(branch.indexOf('master') > -1 && sender.login === githubUsername){
                deploy(res);
            }
        })

        app.post("/webhooks/website", function (req, res) {
            var sender = req.body.sender;
            var branch = req.body.ref;
        
            if(branch.indexOf('master') > -1 && sender.login === githubUsername || branch.indexOf('master') > -1 && sender.login === "FreaksMind" || branch.indexOf('master') > -1 && sender.login === "AndronicC"){
                deployWebsite(res);
            }
        })

        app.post("/webhooks/beta", function (req, res) {
            var sender = req.body.sender;
            var branch = req.body.ref;
        
            if(branch.indexOf('master') > -1 && sender.login === githubUsername || branch.indexOf('master') > -1 && sender.login === "FreaksMind" || branch.indexOf('master') > -1 && sender.login === "AndronicC"){
                deployBeta(res);
            }
        })
        
        app.post("/webhooks/freaksmind", function (req, res) {
            var sender = req.body.sender;
            var branch = req.body.ref;
        
            if(branch.indexOf('master') > -1 && sender.login === "FreaksMind"){
                deployFreaksMind(res);
            }
        })
        
        function deploy(res){
            childProcess.exec('cd /home/alex/Webhook && ./DeployNow.sh', function(err, stdout, stderr){
                if (err) {
                    console.error(err);
                    return res.send(500);
                }
                res.send(200);
            });
        }

        function deployWebsite(res) {
            childProcess.exec('cd /home/alex/Webhook && ./DeployWebsite.sh', function(err, stdout, stderr){
                if (err) {
                    console.error(err);
                    return res.send(500);
                }
                res.send(200);
            });
        }

        function deployBeta(res) {
            childProcess.exec('cd /home/alex/Webhook && ./DeployBeta.sh', function(err, stdout, stderr){
                if (err) {
                    console.error(err);
                    return res.send(500);
                }
                res.send(200);
            });
        }
        
        function deployFreaksMind(res) {
            childProcess.exec('cd /home/alex/Webhook && ./deployFreaks.sh', function(err, stdout, stderr){
                if (err) {
                    console.error(err);
                    return res.send(500);
                }
                res.send(200);
            });
        }
        
    }
}

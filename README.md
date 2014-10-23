Traffic forwarder
=================

Tcp Port Forwarding software also can work as network bridge for redirecting TCP network traffic from one network card to another one.  
This tool is used for testing some services, firewall and intrusion detection systems. The program can also be used for debugging programs and configuring other network tools.

Usage: `xrelay <from> <to>`

// ============================================================  
// Context 1: Request to device at (http://10.84.3.234:30005/)  
// (1)Mediation(Poller)  ---------------> (2)Broker (30005) ------------> (3)Access Point  
// Context 2: Response to ACS Servlet at (http://10.2.4.238:8090)  
// (6)Mediation(Servlet) <--------------- (5)Broker (8090)  <------------ (4)Access Point  
// Solution: Create two node application on broker using node.js as following example  
// ============================================================  
// node.exe "xrelay.js" 30005 10.84.3.234:30005  
// node.exe "xrelay.js" 8090 10.2.4.238:8090  
// ===============================================================  
// parse "8090" and "localhost:8090" or even "live.vndemy.com:8090"  
// Traffic Forwarder (xrelay.js)  

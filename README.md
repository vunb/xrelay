Traffic forwarder
=================

Tcp Port Forwarding software also can work as network bridge for redirecting TCP network traffic from one network card to another one.  
This tool is used for testing some services, firewall and intrusion detection systems. The program can also be used for debugging programs and configuring other network tools.

How to use:
-----------

Create a forwarder:

```sh
xrelay <from> <to>
```

A practical example
-------------------

In my enviroment development, i have a **Servlet** and wanna connect to a device called **AP** or **Acess Point** (we can't connect directly) throught a **Broker Server**. Then **AP** also return data to servlet throght broker.

> **Context 1**: Request to device at (http://10.84.3.234:30005/)  
> (1) Mediation(Poller)  ---> (2) Broker (30005) ---> (3) Access Point  
> **Context 2**: Response to ACS Servlet at (http://10.2.4.238:8090)  
> (6) Mediation(Servlet) <--- (5) Broker (8090)  <--- (4) Access Point  

Solution
=========

Create two node applications on broker using `xrelay` as following example  

```sh
xrelay 30005 10.84.3.234:30005  
xrelay 8090 10.2.4.238:8090  
```

**Note**: xrelay will parse "8090" and "localhost:8090" or even "example.com:8090"  

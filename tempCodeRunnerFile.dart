import 'package:flutter/material.dart';
 
void main() {
  runApp(GeeksForGeeks());
}
 
class GeeksForGeeks extends StatelessWidget{
  Widget build(BuildContext context){
     
    // Material App
    return MaterialApp(
       
      // Scaffold Widget
      home: Scaffold(
        appBar:  AppBar(
           
          // AppBar takes a Text Widget
          // in it's title parameter
          title: Text('GFG'),
        ),
        body: Center(
          child: Text('Hello World')
        ),
      )
    );
  }
}
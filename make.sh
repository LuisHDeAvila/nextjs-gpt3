#!/bin/bash
# Este script crea la aplicacion piloto

MAIN(){
  INST(){
  yarn
  cd lib
  bash index.sh 
  }
  INST &2>/dev/null
}

MAIN
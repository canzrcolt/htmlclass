#!/bin/bash

ls | while read line;
do
  if [[ "$line" == *.css ]]
  then
      mv $line assets/
  fi
done

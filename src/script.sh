#!/usr/bin/env bash
# -*- ENCODING: UTF-8 -*-
: '

	EN DESARROLLO
	adaptacion de react a next
	conversion de componentes: Image, Head, y Link.
	si contiene < img se debe cambiar a < Image
	si contiene href= se debe cambiar a <Link href=
	y todo lo que va en <head></head> se debe contener en <Head></Head>
'
BUSCAR(){
	find . | grep js | xargs cat | grep -c $1
}
BUSCAR img
BUSCAR href
BUSCAR head
find . | grep js > index.txt; cat index.txt | while read line; do
	cat $line | grep -c img > VERIFY
	if [ "$VERIFY"="0" ];then
		echo 'no aplica '$line
	else
		cat $line | sed 's/img/Image/g' > $line.txt
	        mv $line.txt $line
	fi
done
BUSCAR img
BUSCAR Image

package main

import (
	"fmt"
)

func shareWith(name string) string {
	if len(name) != 0 {
		return name
	}

	return "you"
}

func main() {
	//part1 := "One for "
	name := shareWith("Brian")
	//part3 := ", one for me"

	test := fmt.Sprintf("One for %s, one for me.\n", name)
	fmt.Println(test)
}

package reverse

import (
	"fmt"
	"strings"
)

//String Returns reversed string
func String(s string) string {
	splitS := strings.Split(s, "")
	fmt.Println(splitS)

	var reverseSplitS []string

	for _, letter := range splitS {
		reverseSplitS = append([]string{string(letter)}, reverseSplitS...)
	}

	return strings.Join(reverseSplitS, "")
}

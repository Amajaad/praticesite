#include <iostream>
#include <string>

int main(){
int x;
char islem;
int y;
std::cout<<"ilk sayi gir"<<std::endl;
std::cin>>x;

std::cout<<"islem gir"<<std::endl;
std::cin>>islem;

std::cout<<"ikinci sayi gir"<<std::endl;
std::cin>>y;

switch(islem) {
	case '+':
		std::cout<<x+y;
		break;
	case '-':
	    std::cout<<x-y;	
	    break;
	case '*':
		std::cout<<x*y;
	case '/':
		std::cout<<x/y;
		
	default:
		std::cout<<"error";
}


}


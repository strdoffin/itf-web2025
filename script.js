let accbalance = 0;
let cashbalance = 0;
let index = 0;
const output = document.getElementById("output")
const acc = document.getElementById("acc-balance")
const cash = document.getElementById("cash-balance")
const box = document.getElementById("box")
const option = document.getElementById("option")
function onChangebalance(){
	accbalance = parseInt(acc.value);
	cashbalance = parseInt(cash.value);
	output.prepend(++index + " ,Current Account Balance: "+ accbalance +", Current Cash Balance"+ cashbalance,"\n")
}

function operation(){
	box_val = parseInt(box.value);
	option_val = option.value;
	if (option_val == "Deposit")
		if (cashbalance < box_val)
			output.prepend(++index + ", Couldn't deposit entered balance (Insufficient cash balance)\n")
		else
		{
			accbalance = accbalance + box_val
			cashbalance = cashbalance - box_val
			output.prepend(++index + " ,Current Account Balance: "+ accbalance +", Current Cash Balance"+ cashbalance,"\n")
		}
	else if (option_val == "Withdraw")
	{
		if (accbalance < box_val)
			output.prepend(++index + ", Couldn't Withdraw entered balance (Insufficient Account balance)\n")
		else
		{
			accbalance = accbalance - box_val
			cashbalance = cashbalance + box_val
			output.prepend(++index + " ,Current Account Balance: "+ accbalance +", Current Cash Balance"+ cashbalance,"\n")
		}
	}
}
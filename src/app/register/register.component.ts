import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	model: any = {};
	@Output() cancelRegister = new EventEmitter();

	constructor(
		private accountService: AccountService
	) { }

	ngOnInit(): void {
	}

	register() {
		this.accountService.register(this.model).subscribe(response => {
			this.cancel();
		}), error => {
			console.error(error);
		}
	}

	cancel() {
		this.cancelRegister.emit(false);
	}

}

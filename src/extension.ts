// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode from 'vscode'
import { post, get } from './api'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld2" is now active!')

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld2.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from HelloWorld2!');
		(async () => {
			const foo = await post('https://portal.dev.suncom.myflorida.com/api/do/story/get_some', { foo: 'bar' }, { Cookie: 'oasis_session=256D37B3313BA8FA3EF3F5E7C8CC582D' })
			console.log(foo)
		})()
	})

	context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
export function deactivate() { }

export function fetchStories() {
	// post
}
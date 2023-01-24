const loginModal = document.getElementById('loginModal')

const modal = () => {
	return `
    <input type='checkbox' id='my-modal-3' class='modal-toggle' />
    <div class='modal backdrop-blur-sm'>
    <div class='modal-box relative outline outline-1 outline-accent/30 max-w-[420px] max-h-[calc(100vh-2.5rem)]'>
        <label for='my-modal-3' class='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
        <div class='flex items-center justify-center flex-col font-mona-sans'>
            <h3 class='text-lg font-bold w-full leading-none'>Logueate en LiNEWS!</h3>
            <div class='divider'></div>
            <div class='flex flex-col'>
                <button class='btn btn-wide my-1 flex justify-start gap-2'><svg height='1em' viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg' class='w-7 h-7 pointer-events-none socialIcon icon'><path d='M14.863 2c-2.933 0-4.828 1.932-4.828 4.922v2.27H7.41a.41.41 0 00-.41.407v3.289a.41.41 0 00.41.407h2.625v8.297c0 .226.184.408.41.408h3.425a.41.41 0 00.41-.408v-8.297h3.069c.227 0 .41-.182.41-.407l.002-3.289a.407.407 0 00-.411-.408h-3.07V7.268c0-.925.222-1.394 1.434-1.394l1.759-.001a.41.41 0 00.41-.408V2.412a.41.41 0 00-.41-.408z' fill='currentcolor' fill-rule='evenodd'></path></svg>
                    <span class='normal-case text-sm font-medium'>Log in con Facebook</span>
                </button>
                <button class='btn btn-wide my-1 flex justify-start gap-2'><svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='w-7 h-7 pointer-events-none socialIcon icon'><g fill='none' fill-rule='evenodd'><path d='M3.048 16.267A10.242 10.242 0 012 11.733c0-1.631.376-3.17 1.048-4.534L6.489 9.83a6.072 6.072 0 00-.303 1.903c0 .665.106 1.304.303 1.902l-3.441 2.632z' fill='currentColor'></path><path d='M3.048 7.199A10.203 10.203 0 0112.233 1.5c2.604 0 4.93.977 6.744 2.558L16 7.035a5.916 5.916 0 00-3.767-1.349A6.035 6.035 0 006.489 9.83L3.048 7.2z' fill='currentColor'></path><path d='M3.046 16.264l3.44-2.638a6.035 6.035 0 005.747 4.153c2.837 0 4.976-1.442 5.488-3.953h-5.488V9.872h9.534c.14.605.233 1.256.233 1.86 0 6.512-4.651 10.233-9.767 10.233a10.203 10.203 0 01-9.187-5.701z' fill='currentColor'></path><path d='M18.902 19.417l-3.267-2.53c1.068-.674 1.811-1.714 2.086-3.061h-5.488V9.872h9.534c.14.605.233 1.256.233 1.86 0 3.336-1.22 5.939-3.098 7.685z' fill='currentColor'></path></g></svg>
                    <span class='normal-case text-sm font-medium'>Log in con Google</span>
                </button>
                <button class='btn btn-wide my-1 flex justify-start gap-2'><svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='w-7 h-7 pointer-events-none socialIcon icon'><path d='M9.106 24c-.002-.466-.005-.914-.01-1.343a168.92 168.92 0 01-.009-1.685l-.436.075a5.57 5.57 0 01-1.052.066 8.027 8.027 0 01-1.318-.132 2.946 2.946 0 01-1.27-.568 2.403 2.403 0 01-.834-1.164l-.19-.436a4.731 4.731 0 00-.597-.966c-.272-.353-.547-.593-.825-.72l-.132-.094a1.391 1.391 0 01-.247-.228 1.039 1.039 0 01-.17-.265c-.038-.088-.007-.16.094-.218.102-.057.285-.084.55-.084l.38.056c.252.05.565.202.938.455.373.252.68.58.92.984.29.518.64.912 1.052 1.184.41.271.824.407 1.241.407.417 0 .778-.032 1.081-.095.303-.063.588-.158.853-.284.114-.846.424-1.496.93-1.95-.721-.076-1.369-.19-1.944-.342a7.743 7.743 0 01-1.782-.738 5.103 5.103 0 01-1.527-1.269c-.404-.505-.736-1.168-.995-1.988-.259-.821-.389-1.768-.389-2.841 0-1.528.5-2.828 1.498-3.901-.467-1.149-.423-2.437.133-3.863.367-.114.91-.029 1.63.255.721.284 1.249.528 1.584.73.335.201.603.372.806.51a13.478 13.478 0 013.64-.491c1.251 0 2.465.164 3.64.492l.721-.454a10.21 10.21 0 011.744-.834c.67-.252 1.182-.322 1.537-.208.568 1.427.619 2.714.15 3.863C21.502 6.989 22 8.29 22 9.817c0 1.073-.13 2.023-.389 2.85s-.593 1.49-1.004 1.988a5.3 5.3 0 01-1.536 1.26 7.758 7.758 0 01-1.783.738c-.575.152-1.223.266-1.943.342.657.568.986 1.464.986 2.689V24H9.106z' fill='currentcolor' fill-rule='evenodd'></path></svg>
                    <span class='normal-case text-sm font-medium'>Log in con GitHub</span>
                </button>
                <button class='btn btn-wide my-1 flex justify-start gap-2'><svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' class='w-7 h-7 pointer-events-none socialIcon icon'><path d='M19.833 16.784c-.43 1.02-.639 1.473-1.196 2.375-.777 1.258-1.873 2.826-3.232 2.837-1.205.013-1.515-.834-3.153-.824-1.636.01-1.979.84-3.186.828-1.357-.013-2.395-1.428-3.173-2.686-2.173-3.516-2.402-7.645-1.06-9.84.953-1.56 2.455-2.472 3.87-2.472 1.437 0 2.342.838 3.532.838 1.154 0 1.857-.84 3.521-.84 1.26 0 2.592.729 3.541 1.986-3.112 1.813-2.607 6.534.536 7.798zM14.65 5.372c.659-.875 1.16-2.11.98-3.372-1.08.076-2.341.785-3.077 1.709-.67.836-1.22 2.08-1.006 3.29 1.18.037 2.397-.69 3.103-1.627z' fill='currentcolor' fill-rule='evenodd'></path></svg>
                    <span class='normal-case text-sm font-medium'>Log in con Apple</span>
                </button>
            </div>
            <div class='divider'>o</div>
            <input type='text' placeholder='Email' class='input input-bordered w-full max-w-xs my-1' />
            <input type='text' placeholder='Contraseña' class='input input-bordered w-full max-w-xs my-1' />
            <div class='flex justify-between items-center w-full max-w-xs mt-1'>
                <div class='form-control w-full max-w-xs'>
                    <label class='label'>
                        <span class='label-text-alt'>Olvidaste tu contraseña?</span>
                    </label>
                </div>
                <button class='btn btn-sm btn-info'>Log in</button>
            </div>
            <div class='divider'></div>
            <div class='flex justify-between items-center w-full max-w-xs'>
                <span class='label-text-alt'>No tenés una cuenta?</span>
                <button class='btn btn-sm'>Registrate</button>
            </div>
        </div>
    </div>
    </div>
    `
}

loginModal.innerHTML = modal()

export const modalHandler = () => {
	setTimeout(function () {
		document.getElementById('my-modal-3').checked = true
	}, 7000)
}

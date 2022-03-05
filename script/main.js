(() => {
	let theThumbnails = document.querySelectorAll ("#buttonHolder img"),
		gameBoard = document.querySelector(".puzzle-board"), 
		puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
		dropZones = document.querySelectorAll (".drop-zone");

	function changeBgImage () {

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
	}

	function dragStarted(event) {
		console.log ('started dragging a piece');
		event.dataTransfer.setData('currentItem',event.target.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log ('dragging over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log ('drop on me');

		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);

		this.appendChild(document.querySelector(`#${droppedEl}`));
	}

	function turnAnchorOff(e) {
		e.preventDefault();
	}

	theThumbnails.forEach (thumb => thumb.addEventListener("click", changeBgImage));

	puzzlePieces.forEach (piece => piece.addEventListener("dragstart", dragStarted));

	dropZones.forEach (zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});
	
})();

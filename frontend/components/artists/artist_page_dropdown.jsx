import React, { useEffect, forwardRef } from "react";

import ArtistPageDropdownItem from "./artist_page_dropdown_item";

const ArtistPageDropdown = forwardRef(
	(
		{ // unused props will be for submenu refactoring
			playlists,
			allSongs,
			history,
			artistPageDropdownState,
			artistShowRef,
			toggleArtistPageDropdown,
			items,
			toQueueArtist,
		},
		ref
	) => {
		useEffect(() => {
			const whenMenuIsOpen = (event) => {
				if (
					artistPageDropdownState.isOpen &&
					ref?.current &&
					!ref?.current?.contains(event.target)
				) {
					toggleArtistPageDropdown();
				}
			};
			document.addEventListener("mousedown", whenMenuIsOpen);
			document.addEventListener("touchstart", whenMenuIsOpen);
			return () => {
				// Cleanup the event listener when component unmounts
				document.removeEventListener("mousedown", whenMenuIsOpen);
				document.removeEventListener("touchstart", whenMenuIsOpen);
			};
		}, [artistPageDropdownState]);

		const keepDropdownOpen = (event) => {
			event.stopPropagation();
			// prevents re-rendering of parent and keeps menu open

			switch (
				event.target.innerText // TODO: Fill out dropdown actions
			) {
				default:
					null;
			}
		};

		return (
			<>
				<div className="dropdown-item artist-dropdown" ref={ref}>
					{items.map((item, index) =>
						item.submenu ? (
							{
								/* TODO: Implement submenu logic */
							}
						) : (
							<ArtistPageDropdownItem
								key={`${item.id} + ${index}`}
								item={item}
								allSongs={allSongs}
								toQueueArtist={toQueueArtist}
							/>
						)
					)}
				</div>
			</>
		);
	}
);

export default ArtistPageDropdown;

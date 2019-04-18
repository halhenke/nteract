/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/anchor-is-valid: 0 */

// TODO: Fix up a11y eslint here
// TODO: All the `<li>` below that have role button should just be `<button>` with proper styling

// import {
//     DropdownContent,
//     DropdownMenu,
//     DropdownTrigger
// } from "@nteract/dropdown-menu";
// import {
//     ChevronDownOcticon,
//     TrashOcticon,
//     TriangleRightOcticon
// } from "@nteract/octicons";
import { ContentRef } from "@nteract/types";
import * as React from "react";

import styled, { StyledComponent } from "styled-components";

// import { CellType } from "@nteract/commutable";

export interface PalletteProps {
    // type: CellType;
    // executeCell: () => void;
    // deleteCell: () => void;
    // clearOutputs: () => void;
    // toggleParameterCell: () => void;
    // toggleCellInputVisibility: () => void;
    // toggleCellOutputVisibility: () => void;
    // toggleOutputExpansion: () => void;
    // changeCellType: () => void;
    // cellFocused: boolean;
    palletteHidden: boolean;
}

export const PalletteCommand = (props) => {
    const {
        message,
        command
    } = props;

    return (
        <div>{message}</div>
    );
}

export const PalletteBox = (props) => {
    const {
        message,
        command
    } = props;

    return (
        <div>
            <input placeholder="Enter command here..." >{message}</input>
        </div>
    );
}

const dummies = () => (
    <React.Fragment>
        <PalletteCommand key="1" message="This is one" />
        <PalletteCommand key="2" message="This is two" />
        <PalletteCommand key="3" message="This is three" />
    </React.Fragment>
)

export const Pallette = styled.div`
  background-color: var(--theme-cell-toolbar-bg);
  opacity: 0.4;
  display: grid;
  transition: opacity 0.4s;

  & > div {
    display: grid;
  }

  :hover {
    opacity: 1;
  }
`;

interface PalletteMaskProps {
    palletteHidden: boolean;
}

export const PalletteMask = styled.div.attrs<PalletteMaskProps>(
    props => ({
        style: {
            backgroundColor: "grey",
            display: props.palletteHidden
                    ? "none"
                    : "grid"
        }
    })
)`
  z-index: 9999;
  position: absolute;
  display: grid;
  top: 0px;
  //   right: 0px;
  left: 30%;
  width: 40%;
  height: 104px;

  /* Set the left padding to 50px to give users extra room to move their
              mouse to the toolbar without causing the cell to go out of focus and thus
              hide the toolbar before they get there. */
//   padding: 0px 0px 0px 50px;
` as StyledComponent<"div", any, PalletteMaskProps, never>;

export class PurePallette extends React.PureComponent<PalletteProps> {
    static defaultProps: Partial<PalletteProps> = {
        // type: "code"
        palletteHidden: true
    };

    render() {
        const { palletteHidden } = this.props;

        return (
            <PalletteMask
                palletteHidden={palletteHidden}
            >
                <Pallette>
                    <PalletteBox />
                    {/* {this.props.type !== "markdown" && (
                        <button
                            onClick={executeCell}
                            title="execute cell"
                            className="executeButton"
                        >
                            <span className="octicon">
                                <TriangleRightOcticon />
                            </span>
                        </button>
                    )} */}
                    {dummies()}
                </Pallette>
            </PalletteMask>
        );
    }
}

export default PurePallette;

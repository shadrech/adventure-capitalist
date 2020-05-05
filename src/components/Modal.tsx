import { Component } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  show: boolean;
}

const dom = document.getElementById('modal-root');

export class Modal extends Component<Props> {

  el: HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    dom && dom.appendChild(this.el);
  }

  componentWillUnmount() {
    dom && dom.removeChild(this.el);
  }

  render() {
    return this.props.show ? ReactDOM.createPortal(
      this.props.children,
      this.el
    ) : null;
  }
}

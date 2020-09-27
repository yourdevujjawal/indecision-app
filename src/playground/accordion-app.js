'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionApp = function (_React$Component) {
    _inherits(AccordionApp, _React$Component);

    function AccordionApp() {
        _classCallCheck(this, AccordionApp);

        return _possibleConstructorReturn(this, (AccordionApp.__proto__ || Object.getPrototypeOf(AccordionApp)).apply(this, arguments));
    }

    _createClass(AccordionApp, [{
        key: 'render',
        value: function render() {
            var title = 'Accordion App';
            var hiddenTexts = [{
                label: 'Button 1',
                value: 'Text of Accordion 1'
            }, {
                label: 'Button 2',
                value: 'Text of Accordion 2'
            }, {
                label: 'Button 3',
                value: 'Text of Accordion 3'
            }, {
                label: 'Button 4',
                value: 'Text of Accordion 4'
            }];
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Accordion, { hiddenTexts: hiddenTexts })
            );
        }
    }]);

    return AccordionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                null,
                this.props.title
            );
        }
    }]);

    return Header;
}(React.Component);

var Accordion = function (_React$Component3) {
    _inherits(Accordion, _React$Component3);

    function Accordion() {
        _classCallCheck(this, Accordion);

        return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
    }

    _createClass(Accordion, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'accordion' },
                this.props.hiddenTexts.map(function (hiddenText) {
                    return React.createElement(AccordionItem, { key: hiddenText.label, hiddenText: hiddenText });
                })
            );
        }
    }]);

    return Accordion;
}(React.Component);

var AccordionItem = function (_React$Component4) {
    _inherits(AccordionItem, _React$Component4);

    function AccordionItem(props) {
        _classCallCheck(this, AccordionItem);

        var _this4 = _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).call(this, props));

        _this4.handleToggleVisibility = _this4.handleToggleVisibility.bind(_this4);
        _this4.state = {
            visibility: false
        };
        return _this4;
    }

    _createClass(AccordionItem, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var activeStatus = this.state.visibility ? 'active' : '';

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { className: 'accordion__button', onClick: this.handleToggleVisibility },
                    this.props.hiddenText.label,
                    React.createElement('span', { className: this.state.visibility ? 'fas fa-minus' : 'fas fa-plus' })
                ),
                React.createElement(
                    'p',
                    { className: 'accordion__content ' + activeStatus },
                    this.props.hiddenText.value
                )
            );
        }
    }]);

    return AccordionItem;
}(React.Component);

ReactDOM.render(React.createElement(AccordionApp, null), document.querySelector("#app"));

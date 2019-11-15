import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

class BasicInputExample extends React.Component {
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >
            手机号码
          </InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >
            密码
          </InputItem>
          <Button type="primary">Login</Button>
        </List>
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
export default BasicInputExampleWrapper;

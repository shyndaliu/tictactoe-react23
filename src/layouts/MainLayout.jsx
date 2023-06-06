export default function MainLayout(props) {
    return (
      <div className="grid w-screen h-screen bg-pink-50">
        {props.children}
      </div>
    );
}
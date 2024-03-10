const Title = () => (
    <a href="/">
      <img
        src="data:image/png;base64,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"
        alt="Foodie Stop"
        height={100}
      />
    </a>
  );

export default Title;
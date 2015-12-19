var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },
  handleEdit() {
    console.log('edit');
  },
  render() {
    let skills = this.props.skills.map((skill, index) => {
      return (
        <div key={index}>
          <Skill skill={skill}
                 handleDelete={this.handleDelete.bind(this, skill.id)}
                 handleEdit={this.handleEdit}/>
        </div>
      )
    });

    return(
      <div>
        {skills}
      </div>
    )
  }
});

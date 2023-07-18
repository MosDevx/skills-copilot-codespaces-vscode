function skillsMember() {
  var skills = document.getElementById('skills');
  var skillsMember = document.getElementById('skillsMember');
  var skillsMemberValue = skillsMember.value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberOption = document.createElement('option');
  skillsMemberOption.value = skillsMemberValue;
  skillsMemberOption.text = skillsMemberText;
  skillsMemberOption.setAttribute('selected', 'selected');
  skills.add(skillsMemberOption);
  skillsMember.remove(skillsMember.selectedIndex);
}
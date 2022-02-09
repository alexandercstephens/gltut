#version 330

smooth in vec4 theColor;
uniform float windowHeight;

out vec4 outputColor;

void main()
{
	float lerpValue = (gl_FragCoord.y - (windowHeight / 4)) / (windowHeight / 2);

	outputColor = mix(theColor, vec4(0.0f, 0.0f, 0.0f, 1.0f), lerpValue);
}
